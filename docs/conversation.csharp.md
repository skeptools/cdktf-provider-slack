# `conversation` Submodule <a name="`conversation` Submodule" id="@skeptools/provider-slack.conversation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Conversation <a name="Conversation" id="@skeptools/provider-slack.conversation.Conversation"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/r/conversation slack_conversation}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.conversation.Conversation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

new Conversation(Construct Scope, string Id, ConversationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.config">Config</a></code> | <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig">ConversationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-slack.conversation.ConversationConfig">ConversationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetIsArchived">ResetIsArchived</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetPurpose">ResetPurpose</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-slack.conversation.Conversation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-slack.conversation.Conversation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@skeptools/provider-slack.conversation.Conversation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-slack.conversation.Conversation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-slack.conversation.Conversation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@skeptools/provider-slack.conversation.Conversation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-slack.conversation.Conversation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-slack.conversation.Conversation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-slack.conversation.Conversation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-slack.conversation.Conversation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-slack.conversation.Conversation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-slack.conversation.Conversation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsArchived` <a name="ResetIsArchived" id="@skeptools/provider-slack.conversation.Conversation.resetIsArchived"></a>

```csharp
private void ResetIsArchived()
```

##### `ResetPurpose` <a name="ResetPurpose" id="@skeptools/provider-slack.conversation.Conversation.resetPurpose"></a>

```csharp
private void ResetPurpose()
```

##### `ResetTopic` <a name="ResetTopic" id="@skeptools/provider-slack.conversation.Conversation.resetTopic"></a>

```csharp
private void ResetTopic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-slack.conversation.Conversation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

Conversation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-slack.conversation.Conversation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.created">Created</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isExtShared">IsExtShared</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isOrgShared">IsOrgShared</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isShared">IsShared</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroyInput">ActionOnDestroyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isArchivedInput">IsArchivedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isPrivateInput">IsPrivateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.purposeInput">PurposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroy">ActionOnDestroy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isArchived">IsArchived</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isPrivate">IsPrivate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.purpose">Purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.topic">Topic</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-slack.conversation.Conversation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-slack.conversation.Conversation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-slack.conversation.Conversation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-slack.conversation.Conversation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-slack.conversation.Conversation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-slack.conversation.Conversation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-slack.conversation.Conversation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-slack.conversation.Conversation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-slack.conversation.Conversation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-slack.conversation.Conversation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-slack.conversation.Conversation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-slack.conversation.Conversation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-slack.conversation.Conversation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-slack.conversation.Conversation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Created`<sup>Required</sup> <a name="Created" id="@skeptools/provider-slack.conversation.Conversation.property.created"></a>

```csharp
public double Created { get; }
```

- *Type:* double

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@skeptools/provider-slack.conversation.Conversation.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `IsExtShared`<sup>Required</sup> <a name="IsExtShared" id="@skeptools/provider-slack.conversation.Conversation.property.isExtShared"></a>

```csharp
public IResolvable IsExtShared { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsOrgShared`<sup>Required</sup> <a name="IsOrgShared" id="@skeptools/provider-slack.conversation.Conversation.property.isOrgShared"></a>

```csharp
public IResolvable IsOrgShared { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsShared`<sup>Required</sup> <a name="IsShared" id="@skeptools/provider-slack.conversation.Conversation.property.isShared"></a>

```csharp
public IResolvable IsShared { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ActionOnDestroyInput`<sup>Optional</sup> <a name="ActionOnDestroyInput" id="@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroyInput"></a>

```csharp
public string ActionOnDestroyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-slack.conversation.Conversation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsArchivedInput`<sup>Optional</sup> <a name="IsArchivedInput" id="@skeptools/provider-slack.conversation.Conversation.property.isArchivedInput"></a>

```csharp
public object IsArchivedInput { get; }
```

- *Type:* object

---

##### `IsPrivateInput`<sup>Optional</sup> <a name="IsPrivateInput" id="@skeptools/provider-slack.conversation.Conversation.property.isPrivateInput"></a>

```csharp
public object IsPrivateInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@skeptools/provider-slack.conversation.Conversation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@skeptools/provider-slack.conversation.Conversation.property.purposeInput"></a>

```csharp
public string PurposeInput { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@skeptools/provider-slack.conversation.Conversation.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `ActionOnDestroy`<sup>Required</sup> <a name="ActionOnDestroy" id="@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroy"></a>

```csharp
public string ActionOnDestroy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-slack.conversation.Conversation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsArchived`<sup>Required</sup> <a name="IsArchived" id="@skeptools/provider-slack.conversation.Conversation.property.isArchived"></a>

```csharp
public object IsArchived { get; }
```

- *Type:* object

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="@skeptools/provider-slack.conversation.Conversation.property.isPrivate"></a>

```csharp
public object IsPrivate { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-slack.conversation.Conversation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@skeptools/provider-slack.conversation.Conversation.property.purpose"></a>

```csharp
public string Purpose { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@skeptools/provider-slack.conversation.Conversation.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-slack.conversation.Conversation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConversationConfig <a name="ConversationConfig" id="@skeptools/provider-slack.conversation.ConversationConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.conversation.ConversationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

new ConversationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ActionOnDestroy,
    object IsPrivate,
    string Name,
    string Id = null,
    object IsArchived = null,
    string Purpose = null,
    string Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.actionOnDestroy">ActionOnDestroy</a></code> | <code>string</code> | Either of none or archive. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.isPrivate">IsPrivate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_private Conversation#is_private}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#name Conversation#name}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#id Conversation#id}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.isArchived">IsArchived</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_archived Conversation#is_archived}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.purpose">Purpose</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#purpose Conversation#purpose}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.topic">Topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#topic Conversation#topic}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-slack.conversation.ConversationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-slack.conversation.ConversationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-slack.conversation.ConversationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-slack.conversation.ConversationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-slack.conversation.ConversationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-slack.conversation.ConversationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-slack.conversation.ConversationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ActionOnDestroy`<sup>Required</sup> <a name="ActionOnDestroy" id="@skeptools/provider-slack.conversation.ConversationConfig.property.actionOnDestroy"></a>

```csharp
public string ActionOnDestroy { get; set; }
```

- *Type:* string

Either of none or archive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#action_on_destroy Conversation#action_on_destroy}

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="@skeptools/provider-slack.conversation.ConversationConfig.property.isPrivate"></a>

```csharp
public object IsPrivate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_private Conversation#is_private}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-slack.conversation.ConversationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#name Conversation#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-slack.conversation.ConversationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#id Conversation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsArchived`<sup>Optional</sup> <a name="IsArchived" id="@skeptools/provider-slack.conversation.ConversationConfig.property.isArchived"></a>

```csharp
public object IsArchived { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_archived Conversation#is_archived}.

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="@skeptools/provider-slack.conversation.ConversationConfig.property.purpose"></a>

```csharp
public string Purpose { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#purpose Conversation#purpose}.

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@skeptools/provider-slack.conversation.ConversationConfig.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#topic Conversation#topic}.

---



