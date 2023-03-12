# `conversation` Submodule <a name="`conversation` Submodule" id="@skeptools/provider-slack.conversation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Conversation <a name="Conversation" id="@skeptools/provider-slack.conversation.Conversation"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/r/conversation slack_conversation}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.conversation.Conversation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.slack.conversation.Conversation;

Conversation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .actionOnDestroy(java.lang.String)
    .isPrivate(java.lang.Boolean)
    .isPrivate(IResolvable)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .isArchived(java.lang.Boolean)
//  .isArchived(IResolvable)
//  .purpose(java.lang.String)
//  .topic(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.actionOnDestroy">actionOnDestroy</a></code> | <code>java.lang.String</code> | Either of none or archive. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_private Conversation#is_private}. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#name Conversation#name}. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#id Conversation#id}. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.isArchived">isArchived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_archived Conversation#is_archived}. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.purpose">purpose</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#purpose Conversation#purpose}. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.topic">topic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#topic Conversation#topic}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionOnDestroy`<sup>Required</sup> <a name="actionOnDestroy" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.actionOnDestroy"></a>

- *Type:* java.lang.String

Either of none or archive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#action_on_destroy Conversation#action_on_destroy}

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.isPrivate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_private Conversation#is_private}.

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#name Conversation#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#id Conversation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isArchived`<sup>Optional</sup> <a name="isArchived" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.isArchived"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_archived Conversation#is_archived}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.purpose"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#purpose Conversation#purpose}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.topic"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#topic Conversation#topic}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetIsArchived">resetIsArchived</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-slack.conversation.Conversation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-slack.conversation.Conversation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-slack.conversation.Conversation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-slack.conversation.Conversation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-slack.conversation.Conversation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-slack.conversation.Conversation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-slack.conversation.Conversation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-slack.conversation.Conversation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-slack.conversation.Conversation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-slack.conversation.Conversation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-slack.conversation.Conversation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@skeptools/provider-slack.conversation.Conversation.resetId"></a>

```java
public void resetId()
```

##### `resetIsArchived` <a name="resetIsArchived" id="@skeptools/provider-slack.conversation.Conversation.resetIsArchived"></a>

```java
public void resetIsArchived()
```

##### `resetPurpose` <a name="resetPurpose" id="@skeptools/provider-slack.conversation.Conversation.resetPurpose"></a>

```java
public void resetPurpose()
```

##### `resetTopic` <a name="resetTopic" id="@skeptools/provider-slack.conversation.Conversation.resetTopic"></a>

```java
public void resetTopic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-slack.conversation.Conversation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.slack.conversation.Conversation;

Conversation.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-slack.conversation.Conversation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.created">created</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isExtShared">isExtShared</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isOrgShared">isOrgShared</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isShared">isShared</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroyInput">actionOnDestroyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isArchivedInput">isArchivedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isPrivateInput">isPrivateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.purposeInput">purposeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroy">actionOnDestroy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isArchived">isArchived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.purpose">purpose</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-slack.conversation.Conversation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-slack.conversation.Conversation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-slack.conversation.Conversation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-slack.conversation.Conversation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-slack.conversation.Conversation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-slack.conversation.Conversation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-slack.conversation.Conversation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.conversation.Conversation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.conversation.Conversation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.conversation.Conversation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.conversation.Conversation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.conversation.Conversation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.conversation.Conversation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.conversation.Conversation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `created`<sup>Required</sup> <a name="created" id="@skeptools/provider-slack.conversation.Conversation.property.created"></a>

```java
public java.lang.Number getCreated();
```

- *Type:* java.lang.Number

---

##### `creator`<sup>Required</sup> <a name="creator" id="@skeptools/provider-slack.conversation.Conversation.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `isExtShared`<sup>Required</sup> <a name="isExtShared" id="@skeptools/provider-slack.conversation.Conversation.property.isExtShared"></a>

```java
public IResolvable getIsExtShared();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isOrgShared`<sup>Required</sup> <a name="isOrgShared" id="@skeptools/provider-slack.conversation.Conversation.property.isOrgShared"></a>

```java
public IResolvable getIsOrgShared();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isShared`<sup>Required</sup> <a name="isShared" id="@skeptools/provider-slack.conversation.Conversation.property.isShared"></a>

```java
public IResolvable getIsShared();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `actionOnDestroyInput`<sup>Optional</sup> <a name="actionOnDestroyInput" id="@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroyInput"></a>

```java
public java.lang.String getActionOnDestroyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-slack.conversation.Conversation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isArchivedInput`<sup>Optional</sup> <a name="isArchivedInput" id="@skeptools/provider-slack.conversation.Conversation.property.isArchivedInput"></a>

```java
public java.lang.Object getIsArchivedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrivateInput`<sup>Optional</sup> <a name="isPrivateInput" id="@skeptools/provider-slack.conversation.Conversation.property.isPrivateInput"></a>

```java
public java.lang.Object getIsPrivateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@skeptools/provider-slack.conversation.Conversation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@skeptools/provider-slack.conversation.Conversation.property.purposeInput"></a>

```java
public java.lang.String getPurposeInput();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@skeptools/provider-slack.conversation.Conversation.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `actionOnDestroy`<sup>Required</sup> <a name="actionOnDestroy" id="@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroy"></a>

```java
public java.lang.String getActionOnDestroy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.conversation.Conversation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isArchived`<sup>Required</sup> <a name="isArchived" id="@skeptools/provider-slack.conversation.Conversation.property.isArchived"></a>

```java
public java.lang.Object getIsArchived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="@skeptools/provider-slack.conversation.Conversation.property.isPrivate"></a>

```java
public java.lang.Object getIsPrivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-slack.conversation.Conversation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@skeptools/provider-slack.conversation.Conversation.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@skeptools/provider-slack.conversation.Conversation.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-slack.conversation.Conversation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConversationConfig <a name="ConversationConfig" id="@skeptools/provider-slack.conversation.ConversationConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.conversation.ConversationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.slack.conversation.ConversationConfig;

ConversationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .actionOnDestroy(java.lang.String)
    .isPrivate(java.lang.Boolean)
    .isPrivate(IResolvable)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .isArchived(java.lang.Boolean)
//  .isArchived(IResolvable)
//  .purpose(java.lang.String)
//  .topic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.actionOnDestroy">actionOnDestroy</a></code> | <code>java.lang.String</code> | Either of none or archive. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_private Conversation#is_private}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#name Conversation#name}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#id Conversation#id}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.isArchived">isArchived</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_archived Conversation#is_archived}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.purpose">purpose</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#purpose Conversation#purpose}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.topic">topic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#topic Conversation#topic}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.conversation.ConversationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.conversation.ConversationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.conversation.ConversationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.conversation.ConversationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.conversation.ConversationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.conversation.ConversationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.conversation.ConversationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionOnDestroy`<sup>Required</sup> <a name="actionOnDestroy" id="@skeptools/provider-slack.conversation.ConversationConfig.property.actionOnDestroy"></a>

```java
public java.lang.String getActionOnDestroy();
```

- *Type:* java.lang.String

Either of none or archive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#action_on_destroy Conversation#action_on_destroy}

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="@skeptools/provider-slack.conversation.ConversationConfig.property.isPrivate"></a>

```java
public java.lang.Object getIsPrivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_private Conversation#is_private}.

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-slack.conversation.ConversationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#name Conversation#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-slack.conversation.ConversationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#id Conversation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isArchived`<sup>Optional</sup> <a name="isArchived" id="@skeptools/provider-slack.conversation.ConversationConfig.property.isArchived"></a>

```java
public java.lang.Object getIsArchived();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_archived Conversation#is_archived}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@skeptools/provider-slack.conversation.ConversationConfig.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#purpose Conversation#purpose}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@skeptools/provider-slack.conversation.ConversationConfig.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#topic Conversation#topic}.

---



