# `dataSlackConversation` Submodule <a name="`dataSlackConversation` Submodule" id="@skeptools/provider-slack.dataSlackConversation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSlackConversation <a name="DataSlackConversation" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/d/conversation slack_conversation}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

new DataSlackConversation(Construct Scope, string Id, DataSlackConversationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.config">Config</a></code> | <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig">DataSlackConversationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig">DataSlackConversationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetPurpose">ResetPurpose</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPurpose` <a name="ResetPurpose" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetPurpose"></a>

```csharp
private void ResetPurpose()
```

##### `ResetTopic` <a name="ResetTopic" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetTopic"></a>

```csharp
private void ResetTopic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

DataSlackConversation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.created">Created</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isArchived">IsArchived</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isExtShared">IsExtShared</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isOrgShared">IsOrgShared</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isPrivate">IsPrivate</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isShared">IsShared</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.channelIdInput">ChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.purposeInput">PurposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.purpose">Purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.topic">Topic</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Created`<sup>Required</sup> <a name="Created" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.created"></a>

```csharp
public double Created { get; }
```

- *Type:* double

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `IsArchived`<sup>Required</sup> <a name="IsArchived" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isArchived"></a>

```csharp
public IResolvable IsArchived { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsExtShared`<sup>Required</sup> <a name="IsExtShared" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isExtShared"></a>

```csharp
public IResolvable IsExtShared { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsOrgShared`<sup>Required</sup> <a name="IsOrgShared" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isOrgShared"></a>

```csharp
public IResolvable IsOrgShared { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isPrivate"></a>

```csharp
public IResolvable IsPrivate { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsShared`<sup>Required</sup> <a name="IsShared" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isShared"></a>

```csharp
public IResolvable IsShared { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.channelIdInput"></a>

```csharp
public string ChannelIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.purposeInput"></a>

```csharp
public string PurposeInput { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.purpose"></a>

```csharp
public string Purpose { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSlackConversationConfig <a name="DataSlackConversationConfig" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

new DataSlackConversationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ChannelId,
    string Id = null,
    string Purpose = null,
    string Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.channelId">ChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#channel_id DataSlackConversation#channel_id}. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#id DataSlackConversation#id}. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.purpose">Purpose</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#purpose DataSlackConversation#purpose}. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.topic">Topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#topic DataSlackConversation#topic}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.channelId"></a>

```csharp
public string ChannelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#channel_id DataSlackConversation#channel_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#id DataSlackConversation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.purpose"></a>

```csharp
public string Purpose { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#purpose DataSlackConversation#purpose}.

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#topic DataSlackConversation#topic}.

---



